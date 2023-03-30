import  { MdDelete, MdEdit } from 'react-icons/md'
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses'
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns/esm'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import { toast } from 'react-hot-toast';
import TodoModal from './TodoModal';
import CheckButton from './CheckButton';

function TodoItem ({ todo} ) {
    const dispatch = useDispatch()
    const [updateModalOpen,setUpdateModalOpen] = useState(false)
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if(todo.status === 'Complete') {
            setChecked(true)
        }else {
            setChecked(false)
        }
    },[todo.status])
   
    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
        toast.success("Todo Deleted Successfully")
    }

    const handleUpdate = () => {
        setUpdateModalOpen(true)
    }

    const handleCheck = () => {
        setChecked(!checked)
        dispatch(updateTodo({
            ...todo,
            status: checked ? 'incomplete': 'Complete'
        }))
    }

    return (
        <>
            <div className={styles.item}>
                    <div className={styles.todoDetails}>
                        <CheckButton handleCheck={handleCheck}  checked={checked}/>
                        <div className={styles.texts}>
                            <p className={getClasses([styles.todoText, todo.status === 'Complete' && styles['todoText--completed']])}>
                                {todo.title}
                            </p>
                            <p className={styles.time}>
                                {format(new Date(todo.time), 'p, MM/dd/yyyy')}
                            </p>
                        </div>
                    </div>
                    <div className={styles.todoActions}>
                        <div className={styles.icon} onClick={handleDelete} onKeyDown={handleDelete} role="button" tabIndex={0}> <MdDelete/></div>
                        <div className={styles.icon} onClick={handleUpdate} onKeyDown={handleUpdate} role="button" tabIndex={0}> <MdEdit/></div>
                    </div>
            </div>
            <TodoModal type="update" setModalOpen={setUpdateModalOpen} modalOpen={updateModalOpen} todo={todo}/>
       </>
    )
}

export default TodoItem;