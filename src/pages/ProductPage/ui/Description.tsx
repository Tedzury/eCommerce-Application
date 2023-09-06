import { ProductAttribute } from '../../../entities/product';
import { capitalize } from '../../../shared/lib/helpers';

interface IDescriptionProps {
  attributes: ProductAttribute[];
}

function Description({ attributes }: IDescriptionProps) {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-medium text-accent">Description</h3>
      <p className="mt-5 grid gap-y-2 text-text-grey md:grid-cols-2 lg:gap-x-40">
        {attributes.map((attr, index) => {
          if (index === 0) return null;
          return <span className="block" key={attr.name}>{`${capitalize(attr.name)} - ${attr.value}`}</span>;
        })}
      </p>
    </div>
  );
}

export default Description;
