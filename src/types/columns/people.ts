
import type {
  ColumnDef
} from '@tanstack/react-table'



export const peopleColumns: ColumnDef<any>[] = [
  {
    header: 'Name',
    accessorKey: 'name'
  },
  {
    header: 'Height',
    accessorKey: 'height'
  },
  {
    header: 'Mass',
    accessorKey: 'mass'
  },
  {
    header: 'Hair Color',
    accessorKey: 'hair_color'
  },
  {
    header: 'Skin Color',
    accessorKey: 'skin_color'
  },
  {
    header: 'Eye Color',
    accessorKey: 'eye_color'
  },
  {
    header: 'Birth Year',
    accessorKey: 'birth_year'
  },
  {
    header: 'Gender',
    accessorKey: 'gender'
  }
]