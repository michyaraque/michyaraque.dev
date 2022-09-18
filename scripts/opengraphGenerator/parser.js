const fs = require('fs')
const path = require('path');
const matter = require('gray-matter');
const { createOGImage } = require('./utils')

const root = process.cwd();
const routeToWatch = path.join(root, 'data');

const readFile = (...tailPath) => {
  return fs.readFileSync(path.join(routeToWatch, tailPath.join("\\")))
}

const readDir = (...tailPath) => {
  return fs.readdirSync(path.join(routeToWatch, tailPath.join("\\")), { withFileTypes: true })
}

fs.readdirSync(routeToWatch).map((folderName) => {
  readDir(folderName)
    .filter((dirent) => dirent.isFile())
    .map(fileEntity => {
      const parsedContent = readFile(folderName, fileEntity.name)
      const { data } = matter(parsedContent);
      createOGImage({
        route: data.title,
        title: data.title,
        subtitle: data.classSummary
      })
    });

  readDir(folderName)
    .filter((directory) => directory.isDirectory())
    .map(fileEntity => {
      return fs.readdirSync(path.join(routeToWatch, folderName, fileEntity.name))
        .filter(file => file === '_configuration.mdx')
        .map((filePath) => {
          const parsedContent = readFile(folderName, fileEntity.name, filePath)
          const { data } = matter(parsedContent);

          if (data.courseName) {
            const courseName = data.courseName;
            fs.readdirSync(path.join(routeToWatch, folderName, fileEntity.name))
              .filter(file => file !== '_configuration.mdx')
              .map((_filePath) => {
                const wparsedContent = readFile(folderName, fileEntity.name, _filePath)
                const { data } = matter(wparsedContent);

                createOGImage({
                  route: data.title,
                  title: courseName,
                  subtitle: data.classSummary
                })
              })
          }

        })
    });

})


