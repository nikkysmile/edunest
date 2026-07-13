export default function Button({
    children,
    variant="primary"
}){

const variants={

primary:
"bg-sky-600 hover:bg-sky-700 text-white",

secondary:
"border border-slate-300 hover:bg-slate-100"

}

return(

<button

className={`rounded-xl px-6 py-3 font-semibold transition duration-300 ${variants[variant]}`}

>

{children}

</button>

)

}