<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Product;

class ProductTransformer extends TransformerAbstract
{
    /**
     * @return  array
     */
    public function transform(Product $product)
    {
        return $product->attributesToArray();
    }
}