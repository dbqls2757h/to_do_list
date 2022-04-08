import React from 'react';
import '../style/TodoHeader.scss'

const TodoHeader = ({todoLength}) => {
    //Date method
    const today = new Date();

    const dateString = today.toLocaleDateString('ko-KR',{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    const dayString = today.toLocaleDateString('ko-KR', {weekday: 'long'})

    return (
        <div className="TodoHeaderContainer">
            <h1 className="todoDate">{dateString}</h1>
            <div className="todoDayName">{dayString}</div>
            <div className="todoListLeft">할일 {todoLength}개 남음</div>
        </div>
    );
};

export default TodoHeader;
