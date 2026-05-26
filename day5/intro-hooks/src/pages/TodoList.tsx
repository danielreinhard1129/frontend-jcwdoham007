import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

interface Todo {
  todo: string;
  isDone: boolean;
}

function TodoList() {
  const [newTodo, setNewTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleDone = (value: boolean, index: number) => {
    const temp = [...todos];
    temp[index].isDone = value;
    setTodos(temp);
  };

  const handleDelete = (index: number) => {
    const temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  const handleAddTodo = () => {
    const temp = [...todos];
    temp.push({ todo: newTodo, isDone: false });
    setTodos(temp);
    setNewTodo("");
  };

  return (
    <div>
      {/* NAVBAR */}
      <div className="bg-green-500 text-white py-4 px-16">
        <p className="text-2xl">TODO LIST</p>
      </div>

      {/* TABLE & BUTTON ADD NEW TODO */}
      <div className="px-16 py-12 flex justify-end">
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button variant="outline">Add new todo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Add New Todo</DialogTitle>
                <DialogDescription>
                  Add your todo here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <FieldGroup>
                <Field>
                  <Label>Todo</Label>
                  <Input
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                  />
                </Field>
              </FieldGroup>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>

                <DialogClose asChild>
                  <Button onClick={handleAddTodo}>Save changes</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>

      <div className="px-16">
        <Table>
          <TableCaption>A list of your todos.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Done</TableHead>
              <TableHead>Todo</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todos.map((todo, index) => {
              return (
                <TableRow>
                  <TableCell>
                    <Checkbox
                      checked={todo.isDone}
                      onCheckedChange={(checked) => {
                        handleDone(Boolean(checked), index);
                      }}
                    />
                  </TableCell>
                  <TableCell className={todo.isDone ? "line-through" : ""}>
                    {todo.todo}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="destructive"
                      onClick={() => {
                        handleDelete(index);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}

            {/* {todos.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="h-60">
                  <p className="text-center text-lg">No Data</p>
                </TableCell>
              </TableRow>
            ) : null} */}

            {todos.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="h-60">
                  <p className="text-center text-lg">No Data</p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default TodoList;
