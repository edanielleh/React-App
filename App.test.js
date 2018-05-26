import React from 'react';
import App from './App';
import Home from './components/home';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import { expect } from 'chai';
import sinon from 'sinon';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});


it('snapshot of Home', () => {
  const created = renderer.create(<Home />).toJSON();
  expect(created).toMatchSnapshot();
});

// it('never fails', () => {
//   const user = {
//     createdAt: new Date()
//   };
//   expect(user).toEqual({createdAt:
//     expect.any(Date)});
// });

it('should render Home once', () => {
  const wrapper = shallow(<App />);
  console.log(expect)
  expect(wrapper.find(Home)).to.have.length(1);
});

// it('button renders', () => {
//   const button = shallow(<Home text="hi" />)
//   expect(button.contains(Text)).to.equal(true);
// });

// it('simulates click events', () => {
//   // const onPress = sinon.spy();
//   const wrapper2 = shallow(<App />);
//   // const wrapper1 = shallow(<Home text="hi" onPress={onPress} />);
//   // wrapper1.simulate("press");
//   wrapper2.find(Home).first().props().onPress();
//   // expect(onPress.calledOnce).to.equal(true);
//   // wrapper1.simulate('Button').first().props().onPress();
// });

// it('simulates click', () => {
//   const onButtonClick = sinon.spy();
//     const wrapper2 = shallow(<Home onButtonClick={onButtonClick} />);
//     wrapper2.find('Button').simulate('press');
//     expect(onButtonClick).to.have.property('callCount', 1);
// });

// it('checks if the button is there', () => {
//   const wrapper1 = shallow(<App />);
//   expect(wrapper1.find("test")).to.have.length(1);
// });