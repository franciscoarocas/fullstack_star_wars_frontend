
import type {
  ColumnDef
} from '@tanstack/react-table'



export const planetsColumns: ColumnDef<any>[] = [
  {
    header: 'Name',
    accessorKey: 'name'
  },
  {
    header: "Rotation Period",
    accessorKey: 'rotation_period'
  },
  {
    header: "Orbital Period",
    accessorKey: 'orbital_period'
  },
  {
    header: "Diameter",
    accessorKey: 'diameter'
  },
  {
    header: "Climate",
    accessorKey: 'climate'
  },
  {
    header: "Gravity",
    accessorKey: 'gravity'
  },
  {
    header: "Terrain",
    accessorKey: 'terrain'
  },
  {
    header: "Surface Water",
    accessorKey: 'surface_water'
  },
  {
    header: "Population",
    accessorKey: 'population'
  },
  {
    header: 'Created',
    accessorKey: 'created'
  },
  {
    header: 'Edited',
    accessorKey: 'edited'
  }
]