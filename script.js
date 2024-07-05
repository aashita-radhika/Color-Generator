const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215)
    // The number 16777215 is which is the maximum value for a 24-bit color (commonly used in hex color codes).

    const randomCode = "#" + randomNumber.toString(16)
    // Converts the random number to a hexadecimal string. The argument 16 specifies the base for the conversion.
    
    console.log(randomNumber ,randomCode)
    document.body.style.backgroundColor = randomCode
    document.getElementById("hex-code").innerText = randomCode
}

document.getElementById("btn").addEventListener("click", getColor);

getColor()