require('./assets/js/animo')
require.ensure([], ()=>{
  require('./App');
})
