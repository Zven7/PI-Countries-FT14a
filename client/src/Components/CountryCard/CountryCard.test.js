import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CountryCard from './CountryCard';

configure({adapter: new Adapter()});

describe('<Todo />', () => {
  let wrapper;
  let name;
  let continent;
  let img;
  beforeEach(() => {
    name = 'Argentina';
    continent = 'America';
    img = 'https://restcountries.eu/data/arg.svg';
    wrapper =  mount(<CountryCard name={name} continent={continent} img={img}/>)
  })

  it('Should render a div with the passed props', () => {
      console.log(wrapper.contains)
    expect(wrapper.contains(<div id='cardContainer'>
                                <img src={img} alt="Country Flag" />
                                <h1>{name}</h1>
                                <h4>{continent}</h4>
                            </div>))
    .toEqual(true)
  })
  
});