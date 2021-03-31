
export default {

    circumference: (r) => {
        if(r < 0) {
            throw new Error("Error finding circumference, radius was less than 0.")
        }
        return 2 * Math.PI * r
    },

    dot: (a, b) => {
        if(a === null || b === null) {
            throw new Error("Error in dot product, parameters must not be null.")
        }
        return (a.x * b.x) + (a.y * b.y)
    },

    angleBetween: (a, b) => {
        const radians = Math.acos((a.x * b.x + a.y * b.y) / (Math.sqrt(a.x*a.x + a.y*a.y) * Math.sqrt(b.x*b.x + b.y*b.y)))
        return radians * (180/Math.PI)
    }
}


