
/*
 * RENDER Homepage of FashionFundUs 
 */

exports.display = function(req, res){
  res.render('homepage', { title: 'Fashion Fund Us' });
};