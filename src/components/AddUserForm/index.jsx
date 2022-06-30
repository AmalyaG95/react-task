import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './index.module.scss';
import { addUserRequest, setData } from '../../redux/actionCreators';
import { selectAddUserFormData } from '../../redux/selectors';

const AddUserForm = () => {
    const dispatch = useDispatch();
    const { AddUserFormData } = useSelector(selectAddUserFormData);

    const handleChange = (e, inputName) => {
        dispatch(setData({data: e.target.value, inputName}))
    }

    const handleAddUser = () => {
        if(Object.values(AddUserFormData).every(data => data)) dispatch(addUserRequest(AddUserFormData));
    }

    return (
        <div className={styles.container}>
            <h1>Add User Form</h1>
            <div>
                <input 
                    className={styles.input}
                    type="text" 
                    placeholder='First Name' 
                    value={AddUserFormData.firstName} 
                    onChange={(e) => handleChange(e, 'firstName')} 
                />
                <input 
                    type="text" 
                    placeholder='Last Name' 
                    value={AddUserFormData.lastName} 
                    onChange={(e) => handleChange(e, 'lastName')}
                />
            </div>
            <div>
                <input 
                    className={styles.input} 
                    type="text" 
                    placeholder='Address' 
                    value={AddUserFormData.address} 
                    onChange={(e) => handleChange(e, 'address')}
                />
                <input 
                    type="phone" 
                    placeholder='Phone' 
                    value={AddUserFormData.phoneNumber} 
                    onChange={(e) => handleChange(e, 'phoneNumber')}
                />
            </div>
            <div className={styles.genderWrapper}>
                <label htmlFor="male">Male</label>
                <input 
                    type="radio" 
                    name="gender" 
                    id="male" 
                    value="male" 
                    checked={AddUserFormData.gender === 'male'} 
                    onChange={(e) => handleChange(e, 'gender')}
                /> 
                <label htmlFor="female">Female</label>
                <input 
                    type="radio" 
                    name="gender" 
                    id="female" 
                    value="female" 
                    checked={AddUserFormData.gender === 'female'} 
                    onChange={(e) => handleChange(e, 'gender')}
                />             
            </div>
            <button className={styles.addButton} onClick={handleAddUser}>Add</button>
        </div>
    )
}

export default AddUserForm;
