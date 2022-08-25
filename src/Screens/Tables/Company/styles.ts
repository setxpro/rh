import styled from 'styled-components';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

export const Container = styled.div`

    max-height: calc(100vh - 150px);
    max-width: calc(100vw - 200px);
    overflow: scroll;

    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-thumb { background: #999; }
    ::-webkit-scrollbar-track { background: transparent; }

    position: relative;

    table {
        width: 100%;
        thead {

            position: sticky;
            top: 0;
            z-index: 999;

            tr {
                th {
                    background: #045;
                    text-align: center;
                    padding: 8px;
                    transition: all 1s ease;
                    color: #fff;
                }
            }
        }
        tbody {
            tr {
                td {
                    
                    text-align: center;
                    padding: 5px;
                    transition: all 1s ease;
                    color: ${props => props.theme.colors.text};
                    white-space: nowrap;
                }
                
                &:nth-child(even) {
                    transition: all 1s ease;
                    background: ${props => props.theme.colors.main};
                }
            }
        }
    }
`;

export const EditBtn = styled(AiOutlineEdit)`
    cursor: pointer;
    font-size: 1.5rem;
`;
export const Trash = styled(BsTrash)`
    transition: all 1s ease;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    font-size: 1.5rem;
`;


export const ContentTile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;