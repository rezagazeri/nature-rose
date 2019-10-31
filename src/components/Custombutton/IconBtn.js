import React from 'react';
import {ReactComponent as Remove} from '../../images/iconsdelete.svg';
import {ReactComponent as Plus} from '../../images/plus.svg';
import {ReactComponent as Minus} from '../../images/minus.svg';


const iconTypes = {
  remove: Remove,
  minus: Minus,
  plus:Plus
};


const IconBtn = ({ name, ...props }) => {
  let Icon = iconTypes[name];
    return (
        <button className='iconbtn'>
          <Icon {...props} />
        </button>
    );
};

export default IconBtn;