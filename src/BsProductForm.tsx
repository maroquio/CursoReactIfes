import React from 'react';
import BsInput from './BsInput';
import BsSelect from './BsSelect';
import BsTextarea from './BsTextarea';

type Category = 'Eletrônicos' | 'Eletrodomésticos' | 'Construção' | 'Automotivo';

export type BsProductFormProps = {
    onSubmit: (data: {
        name: string;
        description: string;
        imageUrl: string;
        price: string;
        category: Category;
    }) => void;
};

const CATEGORIES = [
    'Eletrônicos',
    'Eletrodomésticos',
    'Construção',
    'Automotivo',
] as const;

function BsProductForm({ onSubmit }: BsProductFormProps) {
    const [formData, setFormData] = React.useState({
        name: '',
        description: '',
        imageUrl: '',
        price: '',
        category: CATEGORIES[0],
    });

    const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, description, imageUrl, price, category } = formData;
        if (onSubmit) {
            onSubmit({
                name,
                description,
                imageUrl,
                price,
                category,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            {/* Name */}
            <div className="form-floating mb-3">
                <BsInput
                    type="text"
                    id="productName"
                    label="Nome do Produto"
                    value={formData.name}
                    onChange={handleChange('name')}
                />
            </div>

            {/* Description */}
            <div className="form-floating mb-3">
                <BsTextarea
                    id="productDescription"
                    label="Descrição"
                    rows={4}
                    placeholder="Descreva o produto"
                    value={formData.description}
                    onChange={handleChange('description')}
                />
            </div>

            {/* Image URL */}
            <div className="form-floating mb-3">
                <BsInput
                    type="url"
                    id="productImageUrl"
                    label="URL da Imagem"
                    placeholder="https://exemplo.com/imagem.jpg"
                    value={formData.imageUrl}
                    onChange={handleChange('imageUrl')}
                />
            </div>

            {/* Price */}
            <div className="form-floating mb-3">
                <BsInput
                    type="number"
                    id="productPrice"
                    label="Preço"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={handleChange('price')}
                />
            </div>

            {/* Category */}
            <div className="form-floating mb-3">
                <BsSelect
                    id="productCategory"
                    label="Categoria"
                    options={CATEGORIES.map(value => ({
                        value,
                        label: value,
                    }))}
                    value={formData.category}
                    onChange={handleChange('category')}
                />
            </div>

            <button type="submit" className="btn btn-primary">Cadastrar</button>
        </form>
    );
}

export default BsProductForm;