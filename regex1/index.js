let regex1 = /[A-Z]/;
let testing = 'ABC';
let result = regex1.test(testing)
console.log(regex1.test(testing));

if(result){
   document.write('Huruf pertama adalah huruf besar')
} else {
   document.write('Huruf pertama adalah huruf kecil')
}