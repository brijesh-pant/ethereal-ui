import { headings } from "../typography";
import themed from '../utils/themed'

export const getHeadingStyles = type => {
    return themed(headings, type);
}