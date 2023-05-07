import { BACKGROUND, PRIMARY } from '@/ui/colors'
import styled from 'styled-components'

export const NoteComponent = styled.div<{ isOpen: boolean }>`
  position: relative;
  transform: rotate(-1deg);

  text-align: center;

  width: ${props => (props.isOpen ? '400px' : '200px')};
  height: ${props => (props.isOpen ? '400px' : '100px')};

  background-color: ${PRIMARY};

  padding: 2em;
  margin: 2em;

  transition: transform 0.2s ease-in-out;

  &:after {
    content: '';
    position: absolute;

    bottom: 0;
    right: 0;

    width: 0;
    height: 0;

    border-style: solid;
    border-width: 20px 20px 0 0;
    border-color: #fdd835 ${BACKGROUND} transparent transparent;

    box-shadow: -2px -2px 2px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    cursor: pointer;

    transform: rotate(0deg) scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
`

export const NoteTitle = styled.h1`
  font-size: 1.5em;
`

export const NoteDescription = styled.p`
  margin-top: 1em;
  white-space: pre-wrap;
  text-align: left;
`

export const Button = styled.button`
  background-color: #f44336;
  border: none;
  color: white;

  padding: 15px 32px;

  font-size: 16px;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    transform: translateY(1px);
  }
`
