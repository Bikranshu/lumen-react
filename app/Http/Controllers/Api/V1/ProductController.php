<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Transformers\ProductTransformer;


class ProductController extends BaseController
{
    protected $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $products =  $this->product->paginate(25);
        return $this->response->paginator($products, new ProductTransformer());
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {

        $product = $this->product->findOrFail($id);
        if (! $product) {
            return $this->response->errorNotFound();
        }

        return $this->response->item($product, new ProductTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = \Validator::make($request->input(), [
            'code' => 'required',
            'name' => 'required',
            'description' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->errorBadRequest($validator->messages());
        }

        $attributes = [
            'code' =>  $request->get('code'),
            'name' => $request->get('name'),
            'description' => $request->get('description'),
        ];
        $this->product->create($attributes);

        return $this->response->created();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $product = $this->product->findOrFail($id);
        if (! $product) {
            return $this->response->errorNotFound();
        }

        $validator = \Validator::make($request->input(), [
            'code' => 'required',
            'name' => 'required',
            'description' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->errorBadRequest($validator->messages());
        }

        $product->code = $request->get('code');
        $product->name = $request->get('name');
        $product->description = $request->get('description');
        $product->update();

        return $this->response->noContent();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $product = $this->product->findOrFail($id);
        if (! $product) {
            return $this->response->errorNotFound();
        }

        if( !$product->delete() ) {
            return $this->response->errorInternal();
        }

        return $this->response->noContent();
    }


}
