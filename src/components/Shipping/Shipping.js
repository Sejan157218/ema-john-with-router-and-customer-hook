import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';

const Shipping = () => {

    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <br />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                <br />
                <input defaultValue=''{...register("address",{ required: true })} />
                <br />
                <input defaultValue='' {...register("city",{ required: true })} />
                <br />
                <input defaultValue='' {...register("phone number",{ required: true })} />
                <br />
                {errors.email && <span>This field is required</span>}
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;