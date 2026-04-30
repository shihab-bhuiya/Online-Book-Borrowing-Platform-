
export async function data(){
    const bookData = await fetch('/public/bookData.json');
    const res =await bookData.json();
    return res;
}