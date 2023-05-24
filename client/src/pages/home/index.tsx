import { useState } from "react";
import { Button, Card, List, Space, Input } from "tdesign-react";
import { DeleteIcon, EditIcon } from "tdesign-icons-react";

interface ListItemType {
  id: number;
  content: string;
  isEdit: boolean;
}

const { ListItem } = List;
const [value, setValue] = useState("");
const [searchValue, setSearchValue] = useState("");

const ToDoList = () => {
  const [listData, setListDate] = useState<ListItemType[]>([]);

  function handleEdit(id: number): void {
    const result = listData.map((item: ListItemType) => {
      if (item.id === id) {
        item.isEdit = true;
      } else {
        item.isEdit = false;
      }

      return item;
    });

    setListDate(result);
  }

  function onChange(id: number, value: string): void {
    const result = listData.map((item: ListItemType) => {
      if (item.id === id) {
        item.content = value;
      }

      return item;
    });

    setListDate(result);
  }

  function handleBlur(id: number): void {
    const result = listData.map((item: ListItemType) => {
      if (item.id === id) {
        item.isEdit = false;
      }

      return item;
    });

    setListDate(result);
  }

  function handleDelete(id: number): void {
    const result = listData.filter((item: ListItemType) => item.id !== id);

    setListDate(result);
  }

  function handleCreateToDoList(value: string): void {
    setListDate([...listData, { id: listData.length + 1, content: value, isEdit: false }]);
  }

  return (
    <Card
      bordered
      title="小记一笔"
      headerBordered
      className="w-2/5 mx-auto mt-10"
      actions={
        <Space>
          <Input
            clearable
            value={searchValue}
            placeholder="请输入搜索内容"
            onChange={(value) => {
              setSearchValue(value);
            }}
          />
        </Space>
      }
    >
      <List split={false}>
        {listData.map((item: ListItemType) => (
          <ListItem
            key={item.id}
            action={
              <Space className="ml-5">
                <Button
                  shape="circle"
                  icon={<EditIcon />}
                  onClick={() => {
                    handleEdit(item.id);
                  }}
                />
                <Button
                  shape="circle"
                  theme="danger"
                  icon={<DeleteIcon />}
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                />
              </Space>
            }
            content={
              item.isEdit ? (
                <Input
                  placeholder="请输入内容"
                  value={item.content}
                  onChange={(value) => {
                    onChange(item.id, value);
                  }}
                  onBlur={() => handleBlur(item.id)}
                />
              ) : (
                <p>{item.content}</p>
              )
            }
          />
        ))}
      </List>

      <Input
        value={value}
        placeholder="请输入内容"
        onChange={(value) => {
          setValue(value);
        }}
        onEnter={(value) => {
          handleCreateToDoList(value);
          setValue("");
        }}
      />
    </Card>
  );
};

export default ToDoList;
