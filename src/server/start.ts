import express from "express"

export default function ():void {
    const app = express()

    // const bbb = "123"

    app.listen(3000, () => {
        console.log("sever start")
    })
}
