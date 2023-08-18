import { render, screen ,fireEvent} from '@testing-library/react';
import App from './App';

test('content checking', () => {
  render(<App />);
  const title = screen.getByText(/Addition calculator/);
  expect(title).toBeInTheDocument();
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const calculatebutton=screen.getByRole('button',{name:'calculate'});
  const result=screen.getByText(/Result/);
  expect(a).toBeInTheDocument();
  expect(b).toBeInTheDocument();
  expect(calculatebutton).toBeInTheDocument();
  expect(result).toBeInTheDocument();
});
test('case 1',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:5}});
  fireEvent.change(b,{target:{value:7}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('12');
});
test('case 2',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:-5}});
  fireEvent.change(b,{target:{value:-3}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('-8');
});
test('case 3',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:10}});
  fireEvent.change(b,{target:{value:-4}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('6');
});
test('case 4',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:0}});
  fireEvent.change(b,{target:{value:9}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('9');
});
test('case 5',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:3}});
  fireEvent.change(b,{target:{value:2}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('5');
});
test('case 6',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:1000000}});
  fireEvent.change(b,{target:{value:500000}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('1500000');
});
test('case 7',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:2.5}});
  fireEvent.change(b,{target:{value:1.75}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('4.25');
});
test('case 8',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:-7}});
  fireEvent.change(b,{target:{value:7}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('0');
});
test('case 9',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:null}});
  fireEvent.change(b,{target:{value:5}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('5');
});
test('case 10',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:8}});
  fireEvent.change(b,{target:{value:null}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('8');
});

test('case 11',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:9007199254740991}});
  fireEvent.change(b,{target:{value:-10}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('9007199254740981');
});
test('case 12',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:9007199254740991}});
  fireEvent.change(b,{target:{value:10}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('Overflow');
});
test('case 13',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:9007199254740991}});
  fireEvent.change(b,{target:{value:-10}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('9007199254740981');
});
test('case 14',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:"helo"}});
  fireEvent.change(b,{target:{value:3}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('NaN');
});
test('case 15',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:3}});
  fireEvent.change(b,{target:{value:"world"}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('NaN');
});
test('case 16',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:10}});
  fireEvent.change(b,{target:{value:-4}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent(6);
});
test('case 17 Overflow',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:9007199254740991}});
  fireEvent.change(b,{target:{value:10}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('Overflow');
});
test('case 18 Underflow',()=>{
  render(<App/>);
  const a=screen.getByPlaceholderText('enter first number');
  const b=screen.getByPlaceholderText('enter second number');
  const button=screen.getByRole('button',{name:'calculate'});
  fireEvent.change(a,{target:{value:-9007199254740991}});
  fireEvent.change(b,{target:{value:-10}});
  fireEvent.click(button);
  const result=screen.getByText(/Result:/i);
  expect(result).toHaveTextContent('Underflow');
});