@extends('layouts.app')

@section('content')
<div className="container form-container" style="overflow:hidden">
        <div className="sign">
            <div className="info"><h1>Welcome Back</h1></div>
            <form onSubmit="submitData(this)">
                
                <div className="form-group m1-2">
                    <label htmlFor="phone">Mobile</label>
                    <input type="tel" name="mobile" className="form-control" required  value="{{old('mobile')}}" />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="phone">Password</label>
                    <input type="password" name="password"  className="form-control" required />
                    <a href="/password_reset" className="forgot-password">Forgot Password</a>
                </div>

                <div className=" mt-2 submit-flex">
                    <button type="submit" className="btn">Login</button>
                    <a href="/register" title="New user..? register now" className="mt-2">New user.? register now</a>
                </div>

            </form>
        </div>
        <div className="alt-login mt-3">
            <div className="alt-head">
                <div className="line"></div>
                <div className="text">Login with</div>
                <div className="line"></div>
            </div>
            <div className="alt-body">
                <div className="alt-app"><i className="fab text-primary fa-3x fa-facebook"></i></div>
                <div className="alt-app"><i className="fab text-danger fa-3x fa-google-plus"></i></div>
            </div>
        </div>
      </div>
@endsection
