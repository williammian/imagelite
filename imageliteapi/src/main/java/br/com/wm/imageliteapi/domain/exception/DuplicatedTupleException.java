package br.com.wm.imageliteapi.domain.exception;

public class DuplicatedTupleException extends RuntimeException{
    public DuplicatedTupleException(String message) {
        super(message);
    }
}
