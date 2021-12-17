import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "../../apis/api";

function PostDelete() {
    
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function deletePost() {
            try {
                await api.delete(`/dele-post${id}`);
                navigate("/lista-post");
            } catch (err) {
                console.error(err);
            }
        }
        deletePost();
    }, [id, navigate]);

    return <div>Deletando</div>;
}

export default PostDelete;