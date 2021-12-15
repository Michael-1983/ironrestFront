import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "../../apis/api";

import ConfirmationModal from "../../components/ConfirmationModal";

function PosttDetail() {
    const [productDetails, setProductDetails] = useState({
        name: "",
        manufacturer: "",
        price: 0,
        inStock: 0,
        pictureUrl: "",
        category: "",
        tags: [],
    });
    const [showModal, setShowModal] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await api.get(`/product/${id}`);

                setProductDetails({ ...response.data });
            } catch (err) {
                console.error(err);
            }
        }
        fetchProduct();
    }, [id]);

    return (
        <div>
            <div className="img-container d-flex justify-content-between">
                <img
                    className="img-fluid mh-100"
                    src={productDetails.pictureUrl}
                    alt={productDetails.name}
                />

                <div>
                    <button className="btn btn-warning me-2">Editar</button>
                    <button className="btn btn-danger" onClick={() => setShowModal(true)}>
                        Deletar
                    </button>
                </div>
            </div>

            <p>
                <strong>Nome: </strong>
                {productDetails.name}
            </p>
            <p>
                <strong>idade: </strong>
                {productDetails.manufacturer}
            </p>
            <p>
                <strong>estado: </strong>
                {productDetails.price.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                })}
            </p>
            <p>
                <strong>Cidade: </strong>
                {productDetails.inStock}
            </p>
            <p>
                <strong>Descrição: </strong>
                {productDetails.category}
            </p>
            <p>
                <strong>Imagem: </strong>
                {productDetails.tags.join(", ")}
            </p>

            <ConfirmationModal
                title="Tem certeza?"
                variant="danger"
                confirmationText="Deletar"
                show={showModal}
                handleClose={() => setShowModal(false)}
                handleConfirmation={() => {
                    navigate(`/product/delete/${id}`);
                    setShowModal(false);
                }}
            >
                Essa ação é irreversível
            </ConfirmationModal>
        </div>
    );
}

export default PosttDetail;