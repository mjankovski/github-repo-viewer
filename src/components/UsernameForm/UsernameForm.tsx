
import { UsernameFormProps  } from '../../types';
import { Controller, useForm } from 'react-hook-form';
import { FormContainer } from "./UsernameForm.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UsernameForm = ({ submitFn }: UsernameFormProps) => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data: { textValue: string | undefined}) => {
        const username = typeof data.textValue !== 'undefined' ? data.textValue : "";
        submitFn(username);
    }

    return (
        <FormContainer>
            <Box
                component="form"
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
                spellCheck="false"
                noValidate
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} 
            >
                    <Controller
                        name="textValue"
                        control={control}
                        render={({ field: { onChange } }) => (
                            <TextField sx={{ mx: 2 }} onChange={onChange} label="Github Username" variant="outlined"/>
                        )}
                    />
                    <Button sx={{ mx: 2 }} type="submit" variant="contained">Search</Button>
            </Box>
        </FormContainer>

    );
};

export default UsernameForm;