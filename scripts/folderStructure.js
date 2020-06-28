const fs = require('fs');

const COMPONENTS_FOLDER = 'components';
const FILE_ENCODING = 'utf-8';

const contentRules = [
    {
        find: /("|')\.\.\//g,
        replace: '$1../../',
    },
    {
        find: /(.+)\.\.\/(.*?)\.styled/g,
        replace: '$1../template/$2.styled',
    },
    {
        find: /\.\/(.*?)\.ui/g,
        replace: '../template',
    },
    {
        find: /components\/(.*?)(("|');)/g,
        replace: 'components/$1/controller$2',
    },
    {
        find: /(.*?)Style(?!d)/g,
        replace: '$1Styled',
    },
    {
        find: /({ .*?)UI( } from .+\/)([A-Z].*?)(("|');)/g,
        replace: '$1$2$3/template$4',
    },
    {
        find: /(.*?)UI/g,
        replace: '$1',
    },
    {
        find: /\.style(("|');)/g,
        replace: '.styled$1',
    },
    {
        find: /("|')\.\/components/g,
        replace: '$1../components',
    },
    {
        find: /(.+\/)([A-Z][a-z,A-Z]*?)(("|');)/g,
        replace: '$1$2/controller$3',
    }
];

const fileRemappings = [
    {
        find: /(.*?)\.container\.tsx/,
        replace: 'controller/$1.controller.tsx',
        rmdir: 'index.ts',
        mkdir: 'controller',
        contentRules: [
            {
                find: /(.*?)Container/g,
                replace: '$1Controller',
            },
        ]
    },
    {
        find: /(.*?)\.ui\.tsx/,
        replace: 'template/$1.template.tsx',
        rmdir: '',
        mkdir: 'template',
        contentRules: [
            {
                find: /(export const.*?)UI/g,
                replace: '$1Template',
            }
        ],
    },
    {
        find: /(.*?)\.style(?:d)?\.ts/,
        replace: 'template/$1.styled.ts',
        rmdir: '',
        mkdir: '',
        contentRules: [],
    },
]

const getFullPath = (folder, item) => `${folder}/${item}`;

const hasSubComponents = (folder, paths) =>
    paths.some(path => path === COMPONENTS_FOLDER && fs.statSync(getFullPath(folder, path)).isDirectory());

const findPath = (paths, regex) => paths.find(path => regex.test(path));

const moveFile = (folder, oldPath, newPath) => fs.renameSync(getFullPath(folder, oldPath), getFullPath(folder, newPath));

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const camelize = string => string.charAt(0).toLowerCase() + string.slice(1);

const getIndexContent = (componentName, componentType) =>
    `export { ${capitalize(componentName)}${capitalize(componentType)} as ${capitalize(componentName)} } from './${camelize(componentName)}.${camelize(componentType)}';`

const createIndexFile = (path, componentName, componentType) =>
    fs.writeFileSync(getFullPath(path, 'index.ts'), getIndexContent(componentName, componentType), FILE_ENCODING);

const createDir = (path, dirName, componentName) => {
    if (!dirName) return;
    const folderPath = getFullPath(path, dirName);
    deleteDir(path, dirName)
    fs.mkdirSync(folderPath);
    createIndexFile(folderPath, componentName, dirName);
}

const deleteDir = (path, dirName) =>
    dirName && fs.existsSync(getFullPath(path, dirName)) && fs.rmdirSync(getFullPath(path, dirName), { recursive: true });

const replaceContent = (path, subPath, rules) => {
    const fullPath = getFullPath(path, subPath);
    const content = fs.readFileSync(fullPath, FILE_ENCODING);
    const newContent = [...rules, ...contentRules]
        .reduce((newContent, { find, replace }) =>
            newContent.replace(find, replace), content);
    fs.writeFileSync(fullPath, newContent, FILE_ENCODING);
}

const fixFileStructure = (path, subPaths, componentName) => {
    fileRemappings.forEach(({ find, replace, mkdir, rmdir, contentRules }) => {
        const oldPath = findPath(subPaths, find)
        if (!oldPath) return;
        createDir(path, mkdir, componentName);
        const newPath = oldPath.replace(find, replace);
        moveFile(path, oldPath, newPath);
        deleteDir(path, rmdir);
        replaceContent(path, newPath, contentRules);
        console.log(`${oldPath} --> ${newPath}`);
    });
}

const structureComponent = (path, componentName) => {
    const fullPath = getFullPath(path, componentName);
    const subPaths = fs.readdirSync(fullPath);
    fixFileStructure(fullPath, subPaths, componentName);
    const subComponents = hasSubComponents(fullPath, subPaths);
    if (subComponents) structureComponents(getFullPath(fullPath, COMPONENTS_FOLDER))
}

const structureComponents = path => {
    const components = fs.readdirSync(path);
    components.forEach(folder => structureComponent(path, folder));
}

structureComponents('src/components');
structureComponents('src/plugins/gameOfLife/components');
structureComponents('src/plugins/sorting/components');