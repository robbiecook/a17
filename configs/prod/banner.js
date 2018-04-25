const pkg = require('../../package.json');

module.exports =
`
 • ${pkg.title || pkg.name} (v${pkg.version})
   ${pkg.homepage}
   Copyright © ${new Date().getFullYear()} ${pkg.author.name}
   
 • ${pkg.author.name}
   ${pkg.author.email}
   ${pkg.author.url}
   
 • Last update: ${new Date().toDateString()}
`;
