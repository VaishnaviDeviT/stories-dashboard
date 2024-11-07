import React, { useState } from 'react';
import { Card, Form, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddStory = () => {
    const [values, setValues] = useState({
        title: '',
        coverImage: null,
        description: '',
        schema: '',
        url: '',
        category: '',
        status: 'unpublished'
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!values.title) newErrors.title = 'Title is required';
        if (!values.coverImage) newErrors.coverImage = 'Cover Image is required';
        if (!values.description) newErrors.description = 'Description is required';
        if (!values.schema) newErrors.schema = 'Schema is required';
        if (!values.url) newErrors.url = 'URL is required';
        if (!values.category) newErrors.category = 'Category is required';

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted', values);
        }
    };

    return (
        <div className="d-flex justify-content-center" style={{ padding: '2rem' }}>
            <Card className="custom-card-style" style={{ width: '75rem' }}>
                <Card.Body>
                    <Card.Title>
                        <h4 className="text-center">SEO ELEMENTS</h4>
                    </Card.Title>
                    <hr />

                    <Form onSubmit={handleSubmit}>
                   
                        <Form.Group className="position-relative mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.title && !!errors.title}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>

                   
                        <Form.Group className="position-relative mb-3">
                            <Form.Label>Add Cover Image</Form.Label>
                            <Form.Control
                                type="file"
                                name="coverImage"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.coverImage && !!errors.coverImage}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.coverImage}
                            </Form.Control.Feedback>
                        </Form.Group>

                     
                        <Form.Group className="position-relative mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.description && !!errors.description}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.description}
                            </Form.Control.Feedback>
                        </Form.Group>

                      
                        <Form.Group className="position-relative mb-3">
                            <Form.Label>Schema</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="schema"
                                value={values.schema}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.schema && !!errors.schema}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.schema}
                            </Form.Control.Feedback>
                        </Form.Group>

             
                        <Form.Group className="position-relative mb-3">
                            <Form.Label>URL</Form.Label>
                            <Form.Control
                                type="text"
                                name="url"
                                value={values.url}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.url && !!errors.url}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.url}
                            </Form.Control.Feedback>
                        </Form.Group>

                       
                        <Form.Group className="position-relative mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                as="select"
                                name="category"
                                value={values.category}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.category && !!errors.category}
                            >
                                <option value="">Select Category</option>
                                <option value="category1">Category 1</option>
                                <option value="category2">Category 2</option>
                                <option value="category3">Category 3</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.category}
                            </Form.Control.Feedback>
                        </Form.Group>

                        
                        <Form.Group className="position-relative mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                as="select"
                                name="status"
                                value={values.status}
                                onChange={handleChange}
                            >
                                <option value="unpublished">Unpublished</option>
                                <option value="published">Published</option>
                            </Form.Control>
                        </Form.Group>

                     
                        <Form.Group className="col-12">
                            <Button
                                // variant="outline-secondary"
                                className="btn btn-primary-600"
                                type="button"
                            >
                                Preview
                            </Button> &nbsp;
                            
                            <Button
                            variant="outline-success"
                                className="btn btn-primary-600"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddStory;
