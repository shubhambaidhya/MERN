'use client';
import { productCategories } from '@/constants/categories';
import $axios from '@/lib/axios/axios.instance';
import { addProductValidationSchema } from '@/validation-schema/add.product.validation.schema';
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Formik } from 'formik';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';

const EditProductPage = () => {
  const router = useRouter();
  const params = useParams();
  const productId = params?.id;
  const { data, isPending } = useQuery({
    queryKey: ['get-product-details'],
    queryFn: async () => {
      return await $axios.get(`/product/detail/${productId}`);
    },
  });
  // get product details
  const { isPending: editPending, mutate } = useMutation({
    mutationKey: ['edit-product'],
    mutationFn: async (values) => {
      return await $axios.put(`/product/edit/${productId}`, values);
    },
    onSuccess: () => {
      router.push('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const productDetail = data?.data?.productDetail;
  console.log(productDetail);
  if (isPending) {
    <CircularProgress />;
  }

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: productDetail?.name || '',
        brand: productDetail?.brand || '',
        price: productDetail?.price || '',
        quantity: productDetail?.quantity || '',
        category: productDetail?.category || '',
        freeShipping: productDetail?.freeShipping || false,
        description: productDetail?.description || '',
      }}
      validationSchema={addProductValidationSchema}
      onSubmit={(values) => {
        mutate(values);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} className="auth-form gap-4">
          <Typography variant="h3" fontFamily="times new roman">
            Edit Product
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
            <TextField
              type="number"
              label="Price"
              {...formik.getFieldProps('price')}
            />
            {formik.touched.price && formik.errors.price ? (
              <FormHelperText error>{formik.errors.price}</FormHelperText>
            ) : null}
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Quantity"
              type="number"
              {...formik.getFieldProps('quantity')}
            />
            {formik.touched.quantity && formik.errors.quantity ? (
              <FormHelperText error>{formik.errors.quantity}</FormHelperText>
            ) : null}
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={formik.values.category}
              label="Category"
              {...formik.getFieldProps('category')}
            >
              {productCategories.map((item, index) => {
                return (
                  <MenuItem
                    key={index}
                    value={item}
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {item}
                  </MenuItem>
                );
              })}
            </Select>

            {formik.touched.category && formik.errors.category ? (
              <FormHelperText error>{formik.errors.category}</FormHelperText>
            ) : null}
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Description"
              multiline
              rows={6}
              {...formik.getFieldProps('description')}
            />
            {formik.touched.description && formik.errors.description ? (
              <FormHelperText error>{formik.errors.description}</FormHelperText>
            ) : null}
          </FormControl>
          <FormControl fullWidth>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik?.values?.freeShipping}
                  {...formik.getFieldProps('freeShipping')}
                />
              }
              label="FreeShipping"
              labelPlacement="start"
            />
          </FormControl>

          <div className="flex flex-col justify-center items-center w-full">
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="secondary"
              disabled={isPending}
              onClick={() => {
                router.push('/');
              }}
            >
              Submit
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default EditProductPage;
