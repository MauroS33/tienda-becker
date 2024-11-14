import { object, string, mixed } from "yup"

let userSchema = object( {
    fullname: string().required("El campo nombre es requerido"),
    phone: mixed().required("El campo telefono es requerido"),
    email: string().email().required("El campo email esta incorrecto o vacio")
})

const validateForm = async(dataForm) => {
   try{

    await userSchema.validate(dataForm)
        return { status: "success" }
   
    }catch(error){
        return { status: "error", message: error.message }

   }
   

}
export default validateForm