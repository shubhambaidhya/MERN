'use client';
import { addProductValidationSchema } from '@/validation-schema/add.product.validation.schema';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
const categories = [
  {
    id: 1,
    category: 'Electronics',
  },
  {
    id: 2,
    category: 'Food And Groceries',
  },
  {
    id: 3,
    category: 'Stationary',
  },
  {
    id: 4,
    category: 'Mobile Phones And Accessories',
  },
  {
    id: 5,
    category: 'Furniture',
  },
  {
    id: 6,
    category: 'Beauty Products',
  },
  {
    id: 7,
    category: 'Plants',
  },
];

const productRegister = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        brand: '',
        price: '',
        category: '',
        freeShipping: '',
        description: '',
      }}
      validationSchema={addProductValidationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} className="auth-form gap-4">
          <Typography variant="h3" fontFamily="times new roman">
            Add Product
          </Typography>
          <FormControl fullWidth>
            <TextField label="Name" {...formik.getFieldProps('name')} />
            {formik.touched.name && formik.errors.name ? (
              <FormHelperText error>{formik.errors.name}</FormHelperText>
            ) : null}
          </FormControl>
          <FormControl fullWidth>
            <TextField label="Brand" {...formik.getFieldProps('brand')} />
            {formik.touched.brand && formik.errors.brand ? (
              <FormHelperText error>{formik.errors.brand}</FormHelperText>
            ) : null}
          </FormControl>
          <FormControl fullWidth>
            <TextField label="Price" {...formik.getFieldProps('price')} />
            {formik.touched.price && formik.errors.price ? (
              <FormHelperText error>{formik.errors.price}</FormHelperText>
            ) : null}
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={formik.values.category}
              label="Category"
              {...formik.getFieldProps('category')}
            >
              {categories.map((item) => {
                return (
                  <MenuItem
                    key={item.id}
                    value={item.category}
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {item.category}
                  </MenuItem>
                );
              })}
            </Select>

            {formik.touched.role && formik.errors.role ? (
              <FormHelperText error>{formik.errors.role}</FormHelperText>
            ) : null}
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Description"
              multiline
              rows={4}
              {...formik.getFieldProps('description')}
            />
            {formik.touched.description && formik.errors.description ? (
              <FormHelperText error>{formik.errors.description}</FormHelperText>
            ) : null}
          </FormControl>
          <FormControl fullWidth>
            <FormControlLabel
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
              control={<Switch defaultChecked />}
              label="Free shipping"
            />
            {formik.touched.freeShipping && formik.errors.freeShipping ? (
              <FormHelperText error>
                {formik.errors.freeShipping}
              </FormHelperText>
            ) : null}
          </FormControl>
          <div className="flex flex-col justify-center items-center w-full">
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="secondary"
            >
              Add Product
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default productRegister;
