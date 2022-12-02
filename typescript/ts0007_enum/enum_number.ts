enum Response {
    No = 0,
    Yes = 1,
}
function respond(message: Response): void {
    if (message > 0) {
        console.log("大于0")
    }
    else{
    console.log("小于0")
    }
}
respond(Response.Yes)
export{}