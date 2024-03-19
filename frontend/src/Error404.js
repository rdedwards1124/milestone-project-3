import "./Add-Style/Error404.css";

function Error404() {
    return (
        <main className="CenterIt" >
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <img className="errorImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhZRcroiCY5eusGINIXASVmFuaY5S8E06lQ&usqp=CAU" alt="Oops! Page not found..." />
        </main>
    );
}

export default Error404;