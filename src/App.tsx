import { useState } from 'react'
import './App.css'
import { Card, Button, Space, Input, List } from "antd";

function App() {
	const [newListItem, setNewListItem] = useState<string>("");
    const [list, setList] = useState<string[]>([]);

    const addNewItem = () => {
		if (newListItem && newListItem.trim()) {
            setList([...list, newListItem.trim()]);
        }
		setNewListItem("");
    };

    const deleteItem = (text: string) => {
        const newList = list.filter((listItem) => (
            listItem !== text
        ));
        setList(newList);
    };

	const onChangeHandler = (e: any) => {
		const currentText: string = e.target.value;
		setNewListItem(currentText);
	};

    return (
        <Card title="List Items" style={{ width: 500 }}>
            <Space.Compact>
                <Input
                    type="text"
                    onChange={onChangeHandler}
                    placeholder="Add new Item"
                    value={newListItem}
                    className="newItemInput"
                />
                <Button type="primary" onClick={addNewItem}>Add</Button>

            </Space.Compact>
            <div>
                {list.length > 0 ? (
                    <List dataSource={list} className="listItems"
                        renderItem={(item, i) => (
                            <List.Item key={item+i}>
                                <List.Item.Meta title={item} />
                                <Button type="primary" danger onClick={() => deleteItem(item)}>Delete</Button>
                            </List.Item>
                        )}
                    />

                ) : (
                    <div className="listMessage">No Items</div>
                )}
            </div>
        </Card>
    );
}

export default App
