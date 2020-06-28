const fs = require('fs');

const COMPONENTS_FOLDER = 'components';

const fileRemappings = [
    {
        find: /(.*?)\.container\.tsx/,
        replace: 'controlled/$1.controlled.tsx',
        rmdir: '',
        mkdir: 'controlled',
    },
    {
        find: /(.*?)\.ui\.tsx/,
        replace: 'template/$1.template.tsx',
        rmdir: '',
        mkdir: 'template',
    },
    {
        find: /(.*?)\.style(?:d)?\.ts/,
        replace: 'template/$1.styled.ts',
        rmdir: '',
        mkdir: 'template',
    },
]

const getFullPath = (folder, item) => `${folder}/${item}`;

const hasSubComponents = (folder, paths) =>
    paths.some(path => path === COMPONENTS_FOLDER && fs.statSync(getFullPath(folder, path)).isDirectory());

const findPath = (paths, regex) => paths.find(path => regex.test(path));

const moveFile = (folder, oldPath, newPath) => fs.renameSync(getFullPath(folder, oldPath), getFullPath(folder, newPath));

const createDir = (path, name) => name && !fs.existsSync(getFullPath(path, name)) && fs.mkdirSync(getFullPath(path, name));

const deleteDir = (path, name) => name && fs.existsSync(getFullPath(path, name)) && fs.rmdirSync(getFullPath(path, name));

const fixFileStructure = (path, subPaths) => {
    fileRemappings.forEach(({ find, replace, mkdir, rmdir }) => {
        const oldPath = findPath(subPaths, find)
        if (!oldPath) return;
        createDir(path, mkdir);
        deleteDir(path, rmdir);
        const newPath = oldPath.replace(find, replace);
        moveFile(path, oldPath, newPath);
        console.log(`${oldPath} --> ${newPath}`);
    });
}

const structureComponent = path => {
    const subPaths = fs.readdirSync(path);
    fixFileStructure(path, subPaths);
    const subComponents = hasSubComponents(path, subPaths);
    if (subComponents) structureComponents(getFullPath(path, COMPONENTS_FOLDER))
}

const structureComponents = path => {
    const components = fs.readdirSync(path);
    components.forEach(folder => structureComponent(getFullPath(path, folder)));
}

structureComponents('src/components');