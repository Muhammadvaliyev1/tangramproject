/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'now': '855px', 
        'how': '820px',
        'soo': '696px',
        'goo': '558px',
        'ooo': '900px',
        'gog': '635px'
      },

      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
        },

      textColor: {
        discord: '#1363FF',
        button: '#FF0BFA'
      },

      borderColor: {
        discord: '#1363FF'
      },

      gradientColorStops: {
        discord: '#1363FF',
        button: '#FF0BFA'
      },

      backgroundColor: {
        discord: '#1363FF',
        button: '#FF0BFA'
      },
      backgroundImage: {
        section2: "url('../img/section2.png')"
      }
    },
  },
  plugins: [],
}

