import { React, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';


export default function MyComponent() {
          const [open, setOpen] = useState(false);
          const [value, setValue] = useState(null);
          const [items, setItems] = useState([
                    { label: 'Monthly Rashan', value: 'Monthly Rashan' },
                    { label: 'weekly Rashan', value: 'weekly Rashan' },
                    { label: 'One Time Rashan', value: 'One Time Rashan' },
                    { label: 'Two Time Rashan', value: 'Two Time Rashan' },
                    { label: 'Three Time Rashan', value: 'Three Time Rashan' },
          ]);

          return (
                    <DropDownPicker style={{position:"relative",left:120,marginTop:10}}
                              open={open}
                              value={value}
                              items={items}
                              setOpen={setOpen}
                              setValue={setValue}
                              setItems={setItems}
                    />
          );
}