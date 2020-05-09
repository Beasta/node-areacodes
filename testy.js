const reference = require("./lib/reference");
const async = require( 'async' );

const getReference = function ( done ) {

  async.waterfall( [
    ( done ) => {
      reference.nanpa( done );
    },
    ( data, done ) => {
      referenceDatabase = data;
      done();
    }
  ], done );

};
getReference((one,two)=>{
  console.log('one',one);
  console.log('two',two);
});
