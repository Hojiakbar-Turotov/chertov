const F_6_3_2017 = document.getElementById("F_6_3_2017");

const siteUrl = 'https://masalalar-fizika.vercel.app/';

const books = {
 F_6_3_2017: `${siteUrl}/main/pdf/Fizika,6-sinf darsligi .pdf`

}

F_6_3_2017.addEventListener('click', function(){
    window.open(books.F_6_3_2017);
})