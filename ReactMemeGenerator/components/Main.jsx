import React from "react"

export default function Main() {
    let [memeData, setMemeData] = React.useState({
        img: {src: "http://i.imgflip.com/1bij.jpg"},
        topText: "One does not simply",
        bottomText: "Walk into Mordor"
    })
    let [memeArray, setMemeArray] = React.useState ([])


    console.log(memeData)

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(r => r.json())
            .then(json => {
                setMemeArray(json.data.memes)
                /*
                setMemeData(prevMeme => ({
                    ...prevMeme,
                    img: {src:json.data.memes[0].url}
                }))
                    */
            })
    }, [])

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function changeMeme() {
        let newMeme = memeArray[getRandomInt(0, memeArray.length - 1)]

        setMemeData(prevMemeData => ({
            ...prevMemeData,
            img: {src: newMeme.url}
        }))
    }

    function handleChange(event) {
        const {value, name} = event.currentTarget

        setMemeData(prevMemeData => ({
            ...prevMemeData,
            [name]: value
        }))

    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={memeData.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={memeData.bottomText}
                    />
                </label>
                <button onClick={changeMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memeData.img.src} />
                <span className="top">{memeData.topText}</span>
                <span className="bottom">{memeData.bottomText}</span>
            </div>
        </main>
    )
}