const pages={}

pages.baseapi_url="http://localhost/fullstack/

pages.getApi = async (url) =>{   
     try{
        return await axios(url)      
     }catch(error){
        pages.print_message("ERROR FROM GET API" + error)
     }
}

pages.page_login= async () =>{   
    const index_url=pages.baseapi_url + "login-register.php"; 
    const response= await pages.getApi(index_url); 
    console.log(response)

}