import { useForm } from "react-hook-form";

import APIPlaylist from "../Services/APIPlaylist";

function NewPlaylistForm() {
    const back = () => {
        console.log("ok")
        window.history.back()
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        try {
            APIPlaylist.postPlaylist(data.NewPlaylist)
            window.location.href = "/"
        }
        catch (error) {
            console.error(error.response)
        }

    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <span>Give your playlist a name</span>

            <input placeholder="My New PlayList" {...register("NewPlaylist", { required: true, maxLength: 20 })} />
            {errors.NewPlaylist && <span>This field is required</span>}
            <div className="end-button">
                <input type="button" value="Cancel" onClick={back} />
                <input type="submit" value="Create" />
            </div>
        </form>
    )

}

export default NewPlaylistForm