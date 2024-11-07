import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './CategoryAdd.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function CategoryAdd() {
  const [values, setValues] = useState({ categoryName: '', file: null });
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
    if (!values.categoryName) newErrors.categoryName = 'Category Name is required';
    if (!values.file) newErrors.file = 'File is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
       
      console.log('Form submitted', values);
    }
  };

  return (
    <div className="d-flex justify-content-center" style={{ padding: '2rem' }}>
        <Card className="custom-card-style" style={{ width: '35rem' }}>
      <Card.Body>
        <Card.Title>
          <h4 className='text-center'>Add Category</h4>
        </Card.Title>
        <hr />
   
        <Form onSubmit={handleSubmit}>
          <Form.Group className="position-relative mb-3">
            <Form.Label>Add Image</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.file && !!errors.file}
            />
            <Form.Control.Feedback type="invalid">
              {errors.file}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="position-relative mb-3">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              name="categoryName"
              value={values.categoryName}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.categoryName && !errors.categoryName}
              isInvalid={touched.categoryName && !!errors.categoryName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.categoryName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="col-12">
            <Button 
              variant="outline-primary"
              className="btn btn-outline-primary-600 radius-8 px-20 py-11"
              type="button"
            >
              Cancel
            </Button> &nbsp;
            <Button
              className="btn btn-primary-600"
              type="submit"
            >
              Add Category
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
    </div>
  );
}

export default CategoryAdd;