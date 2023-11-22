const Roles = require('../model/Role');
var slugify = require('slugify')
//
async function createRoleService(req,res) {
      try {
          const { name } = req.body;
          console.log(name);
          const slug = slugify(name, {  
                      replacement: '-',     // replace spaces with replacement character, defaults to `-`
                      remove: undefined,   // remove characters that match regex, defaults to `undefined`
                      lower: true,        // convert to lower case, defaults to `false`
                      strict: false,     // strip special characters except replacement, defaults to `false`
                      locale: 'vi',     // language code of the locale to use
                      trim: true       // trim leading and trailing replacement chars, defaults to `true` });
                  })
          const adminRole = new Roles({
              name: name,
              slug: slug,
              publishedDate: new Date(),
          });

          const createdRole = await adminRole.save();
          return createdRole;
      } catch (error) {
          throw new Error(`Error creating role: ${error.message}`);
      }
 
} 
module.exports =   {createRoleService }  ;
  