import mongoose, { Document, Model, Schema } from "mongoose";


export interface ITodo extends Document {
    todo: string;
    isCompleted: boolean;
    isUpdated?:boolean;
}
const todoSchema = new Schema<ITodo>({
  todo: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
  isUpdated: {
    type: Boolean,
    required: true,
  },
});

const Todo = mongoose.models.Todo || mongoose.model<ITodo>("Todo", todoSchema);


export { Todo, todoSchema };
export default Todo;